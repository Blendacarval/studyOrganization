import 'package:flutter/material.dart';
import '../../widgets/schedule_form.dart';

class ScheduleScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Schedule')),
      body: ScheduleForm(),
    );
  }
}
