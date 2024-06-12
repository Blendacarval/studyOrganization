import 'package:flutter/material.dart';
import '../../widgets/schedule_form.dart';

class ScheduleScreen extends StatelessWidget {
  const ScheduleScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Schedule')),
      body: ScheduleForm(),
    );
  }
}
