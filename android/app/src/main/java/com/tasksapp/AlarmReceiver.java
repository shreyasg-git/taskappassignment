// AlarmReceiver.java

package com.tasksapp;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;

public class AlarmReceiver extends BroadcastReceiver {

  @Override
  public void onReceive(Context context, Intent intent) {
    String taskTitle = intent.getStringExtra("taskTitle");

    AlarmModule.showNotification(context, taskTitle);
  }
}
