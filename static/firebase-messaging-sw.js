
    importScripts(
      'https://www.gstatic.com/firebasejs/9.6.4/firebase-app-compat.js'
    )
    importScripts(
      'https://www.gstatic.com/firebasejs/9.6.4/firebase-messaging-compat.js'
    )
    firebase.initializeApp({"apiKey":"AIzaSyDSOiEkWcX2LQTviXgpLmtY5oYn1FYa0O0","authDomain":"multiteam-c8300.firebaseapp.com","projectId":"multiteam-c8300","storageBucket":"multiteam-c8300.appspot.com","messagingSenderId":"289949024452","appId":"1:289949024452:web:b36ce76e7de30c37e84991","measurementId":"G-4VJQ6VWWKL"})

    // Retrieve an instance of Firebase Messaging so that it can handle background
    // messages.
    const messaging = firebase.messaging()

    // Setup event listeners for actions provided in the config:
    self.addEventListener('notificationclick', function(e) {
      const actions = [{"action":"randomName","url":"randomUrl"}]
      const action = actions.find(x => x.action === e.action)
      const notification = e.notification

      if (!action) return

      if (action.url) {
        clients.openWindow(action.url)
        notification.close()
      }
    })

    