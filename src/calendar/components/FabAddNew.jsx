import { addHours } from "date-fns";
import { useCalendarStore, useUiStore } from "../../Hooks"


export const FabAddNew = () => {

  const { openDateModal } = useUiStore();
  const { setActivateEvent } = useCalendarStore();

  const onHangleModal = () => {
    setActivateEvent({
          title: '',
          notes: '',
          start: new Date(),
          end: addHours( new Date(), 2 ),
          bgColor: '#39e0e9',
              user: {
              _id: '123',
              name: 'Gibran Flores'
          }
    })
    openDateModal();
  }

  return (
    <button className="btn btn-primary fab" onClick={onHangleModal}>
        <i className="fas fa-plus"></i>

    </button>
  )
}
