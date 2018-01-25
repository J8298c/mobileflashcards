import React from 'react';
import { AsyncStorage } from 'react-native';
import { Notifications, Permissions } from 'expo';

const Notification_KEY = 'Whiz_kid_key';


export function clearNotifications() {
    return AsyncStorage.removeItem(Notification_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync())
}

function createNotification() {
    return {
        title: 'Studied Today',
        body: 'You havent logged your learning today',
        ios: {
            sound: true
        }
    }
}

export function setNotifications() {
    AsyncStorage.getItem(Notification_KEY)
    .then(JSON.parse)
    .then((data) => {
        if(data === null){
            Permissions.askAsync(Permissions.NOTIFICATIONS)
            .then(({ status }) => {
                if(status === 'granted') {
                    Notifications.cancelAllScheduledNotificationsAsync()

                    let tomorow = new Date()

                    tomorrow.setDate(tomorow.getDate() + 1)
                    tomorrow.setHours(20)
                    tommorow.setMinutes(0)

                    Notifications.scheduleLocalNotificationAsync(
                        createNotification(),
                        {
                            time: tomorow,
                            repeat: 'day',
                        }
                    )
                    AsyncStorage.setItem(Notification_KEY, JSON.stringify(true))
                }
            })
        }
    })
}