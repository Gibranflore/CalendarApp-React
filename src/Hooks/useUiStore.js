import { useDispatch, useSelector } from "react-redux"
import { onOpenDateModal, onClosseDateModal } from "../App/Ui/UiSlice"

export const useUiStore = () => {

    const dispatch = useDispatch()

    const {
        isDateModalOpen
    } = useSelector( state => state.ui )

    const openDateModal = () => {
        dispatch( onOpenDateModal() )
    };

    const closeDateModal = () => {
        dispatch( onClosseDateModal() )
    }
    
    return {
        isDateModalOpen,
        closeDateModal,
        openDateModal
    }
}