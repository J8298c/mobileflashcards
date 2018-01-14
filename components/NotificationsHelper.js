import { AsyncStorage } from 'react-native';
import { Notifications, Permissions } from 'expo'


const NOTIFICATION_KEY = 'WhizKid: notifications';


export function clearLocalNotifications() {
    AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
}

function createNotification() {
    return {
        title: 'What did you learn today',
        body: 'Dont forget to learn something new',
        ios: {
            sound: true
        }
    }
}

export function setLocalNotification() {
    AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
        if(data === null) {
            Permissions.askAsync(Permissions.NOTIFICATIONS)
            .then(({status}) => {
                if(status === 'granted') {
                    Notifications.cancelScheduledNotificationAsync()

                    let tomorrow = new Date()
                    tomorrow.setDate(tomorrow.getDate() + 1)

                    tomorrow.setHours(20)
                    tomorrow.setMinutes(0)
                    Notifications.scheduleLocalNotificationAsync(
                        createNotification(),
                        {
                            time: tomorrow,
                            repeat: 'day',
                        }
                    )
                    AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
                }
            })
        }
    })
}