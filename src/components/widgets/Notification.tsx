import { useEffect, useMemo } from 'react'
import { useRecoilState } from 'recoil'
import Icon from '~/components/elements/Icon'
import {
  notificationState,
  NOTIFICATION_TYPE,
} from '~/recoil/atoms/notificationState'

const Notification = () => {
  const [notification, setNotification] = useRecoilState(notificationState)

  const iconColor = useMemo(() => {
    if (notification.type === NOTIFICATION_TYPE.INFORMING) {
      return 'text-emerald-500'
    }
    if (notification.type === NOTIFICATION_TYPE.WARNING) {
      return 'text-amber-500'
    }
    return 'text-rose-500'
  }, [notification.type])

  useEffect(() => {
    if (notification?.autoClose) {
      setTimeout(() => {
        setNotification({
          ...notification,
          isShow: false,
        })
      }, 3000)
    }
  }, [notification])

  const onClose = () => {
    setNotification({
      ...notification,
      isShow: false,
    })
  }

  return (
    <div
      className={`fixed top-5 z-10 ${
        notification?.isShow
          ? 'animate-slideIn right-5'
          : 'animate-slideOut -right-full'
      }`}
    >
      <div className="m-auto">
        <div className="relative p-3 bg-white border border-gray-300 rounded-lg shadow-lg">
          <div className="flex flex-row items-center">
            <div className="px-2">
              <Icon name={notification.type} style={`w-6 h-6 ${iconColor}`} />
            </div>
            <div className="ml-2 mr-6 text-xs">
              <span className={`font-semibold ${iconColor}`}>
                {notification.title}
              </span>
              {notification.message && (
                <span className="block text-gray-500">
                  {notification.message}
                </span>
              )}
            </div>
          </div>
          <Icon
            name="close"
            style="w-4 h-4 absolute top-2 right-2 text-gray-600 hover:cursor-pointer"
            onClick={onClose}
          />
        </div>
      </div>
    </div>
  )
}

export default Notification
