import { useEffect, useMemo, useState } from "react";
import { addHours, differenceInSeconds, set } from "date-fns";
import { es } from 'date-fns/locale/es';

import Modal from "react-modal"
import DatePicker, {registerLocale} from "react-datepicker";
import Swal from "sweetalert2";

import 'sweetalert2/src/sweetalert2.scss'
import './style.css'
import "react-datepicker/dist/react-datepicker.css";
import { useCalendarStore, useUiStore } from "../../Hooks";


registerLocale('es', es )

const customStyles = {
    content: {
        top:         '50%',
        left:        '50%',
        right:       'auto',
        bottom:      'auto',
        marginRight: '-50%',
        transform:   'translate(-50%, -50%)',
    },
};
Modal.setAppElement('#root');

export const CalendarModal = () => {

    const { activeEvent, startSavingEvent } = useCalendarStore()

    const {closeDateModal, isDateModalOpen} = useUiStore()
    
    const [formSubmited, setformSubmited] = useState(false)

    const [formValues, setformValues] = useState({
        title: 'Gibran',
        notes: 'Flores',
        start: new Date(),
        end: addHours (new Date(), 2 ),
    });

    const titleClass = useMemo(() => {
        if ( !formSubmited ) return '';

        return ( formValues.title.length > 0 )
            ? ''
            : 'is-invalid';

    }, [ formValues.title, formSubmited ])

    useEffect(() => {
        if ( activeEvent !== null ) {
            setformValues({ ...activeEvent });
        }    
    }, [ activeEvent ])
    
    

    const onInputChange = ({target}) => {
        setformValues({
            ...formValues,
            [target.name]: target.value
        })
    }

    const onDateChanging = (event, changing) => {
        setformValues({
            ...formValues,
            [changing]: event
        })
    }

    const onCloseModal = () => {
        // console.log("cerrando modal");
        closeDateModal()
    }

    const onSubmit = async( event ) => {
        event.preventDefault();
        setformSubmited(true);

    const differencie = differenceInSeconds(formValues.end, formValues.start)


    if( isNaN( differencie ) || differencie <= 0 ) {
        Swal.fire('Las fechas son incorrectos', 'Revisasr las fechas', 'error');
        return;
    }

    if( formValues.title.length <= 0 ) return;

        console.log(formValues);

        await startSavingEvent(formValues);
        closeDateModal();
        setformSubmited(false)

    }

    return (
        <Modal
            isOpen={isDateModalOpen}
            onRequestClose={onCloseModal}
            style={customStyles}
            className='modal'
            overlayClassName="modal-fondo"
            closeTimeoutMS={200}
        >
    <h1> Nuevo evento </h1>
        <hr />
        <form className="container" onSubmit={onSubmit}>

            <div className="form-group mb-2">
                <label>Fecha y hora inicio</label>
                    <DatePicker
                        selected={formValues.start}
                        className='form-control'
                        onChange={ (event) => onDateChanging(event, 'start')}
                        dateFormat='Pp'
                        showTimeSelect
                        locale='es'
                        timeCaption="Hora"
                    />
            </div>

            <div className="form-group mb-2">
                <label>Fecha y hora fin</label>
                    <DatePicker
                        minDate={formValues.start}
                        selected={formValues.end}
                        className='form-control'
                        onChange={ (event) => onDateChanging(event, 'end')}
                        dateFormat='Pp'
                        locale='es'
                        timeCaption="Hora"
                        showTimeSelect
                    />
            </div>

            <hr />
            <div className="form-group mb-2">
                <label>Titulo y notas</label>
                <input
                    type="text"
                    className={ `form-control ${ titleClass }`}
                    placeholder="Título del evento"
                    name="title"
                    autoComplete="off"
                    value={formValues.title}
                    onChange={onInputChange}
                />
                <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
            </div>

            <div className="form-group mb-2">
                <textarea
                    type="text"
                    className="form-control"
                    placeholder="Notas"
                    rows="5"
                    name="notes"
                    value={formValues.notes}
                    onChange={onInputChange}
                ></textarea>
                <small id="emailHelp" className="form-text text-muted">Información adicional</small>
            </div>

            <button
                type="submit"
                className="btn btn-outline-primary btn-block"
            >
                <i className="far fa-save"></i>
                <span> Guardar</span>
            </button>

        </form>
                </Modal>

    )
}
