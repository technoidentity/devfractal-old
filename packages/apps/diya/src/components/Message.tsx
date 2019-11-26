import { toast, Zoom } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
toast.configure()

export const toastMessage = (code: string, message: string) => {
  code === 'fail'
    ? toast.error(message, {
        transition: Zoom,
        autoClose: 3000,
        closeButton: false,
        hideProgressBar: true,
      })
    : code === '401'
    ? toast.error('session expired please login again', {
        transition: Zoom,
        autoClose: 3000,
        closeButton: false,
        hideProgressBar: true,
      })
    : toast.success(message, {
        transition: Zoom,
        autoClose: 3000,
        closeButton: false,
        hideProgressBar: true,
      })
}
