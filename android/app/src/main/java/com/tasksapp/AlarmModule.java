// AlarmModule.java
package com.tasksapp;

import android.app.AlarmManager;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import android.os.Build;
import androidx.core.app.NotificationCompat;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class AlarmModule extends ReactContextBaseJavaModule {

  private static final String CHANNEL_ID = "channel_0";
  private static final String CHANNEL_NAME = "Alarm Channel";

  public AlarmModule(ReactApplicationContext reactContext) {
    super(reactContext);
    createNotificationChannel(reactContext);
  }

  @Override
  public String getName() {
    return "AlarmModule";
  }

  @ReactMethod
  public void setAlarm(String timeInMillis, String taskTitle) {
    long time = Long.parseLong(timeInMillis);

    AlarmManager alarmManager = (AlarmManager) getReactApplicationContext()
      .getSystemService(Context.ALARM_SERVICE);
    Intent intent = new Intent(
      getReactApplicationContext(),
      AlarmReceiver.class
    );
    intent.putExtra("taskTitle", taskTitle); // Pass taskTitle to AlarmReceiver
    PendingIntent pendingIntent = PendingIntent.getBroadcast(
      getReactApplicationContext(),
      0,
      intent,
      PendingIntent.FLAG_UPDATE_CURRENT | PendingIntent.FLAG_IMMUTABLE
    );
    alarmManager.setExact(AlarmManager.RTC_WAKEUP, time, pendingIntent);
  }

  private void createNotificationChannel(Context context) {
    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
      NotificationChannel channel = new NotificationChannel(
        CHANNEL_ID,
        CHANNEL_NAME,
        NotificationManager.IMPORTANCE_DEFAULT
      );
      NotificationManager notificationManager = context.getSystemService(
        NotificationManager.class
      );
      notificationManager.createNotificationChannel(channel);
    }
  }

  public static void showNotification(Context context, String taskTitle) {
    Intent intent = new Intent(context, MainActivity.class); // Change MainActivity to your app's main activity
    intent.setFlags(
      Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_CLEAR_TASK
    );
    PendingIntent pendingIntent = PendingIntent.getActivity(
      context,
      0,
      intent,
      PendingIntent.FLAG_UPDATE_CURRENT | PendingIntent.FLAG_IMMUTABLE
    );

    NotificationCompat.Builder builder = new NotificationCompat.Builder(
      context,
      CHANNEL_ID
    )
      .setSmallIcon(android.R.drawable.ic_lock_idle_alarm)
      .setContentTitle("Due Date Passed")
      .setContentText(
        "Due Date for the task" + " " + taskTitle + " " + "has passed"
      )
      .setPriority(NotificationCompat.PRIORITY_HIGH)
      .setContentIntent(pendingIntent)
      .setAutoCancel(true);

    NotificationManager notificationManager = (NotificationManager) context.getSystemService(
      Context.NOTIFICATION_SERVICE
    );
    notificationManager.notify(0, builder.build());
  }
}
