import 'package:flutter/material.dart' show BuildContext, Column, EdgeInsets, ElevatedButton, InputDecoration, Padding, SizedBox, State, StatefulWidget, Text, TextEditingController, TextField, Widget;

// ignore: use_key_in_widget_constructors
class ScheduleForm extends StatefulWidget {
  @override
  // ignore: library_private_types_in_public_api
  _ScheduleFormState createState() => _ScheduleFormState();
}

class _ScheduleFormState extends State<ScheduleForm> {
  final TextEditingController subjectController = TextEditingController();
  final TextEditingController topicController = TextEditingController();
  final TextEditingController dateController = TextEditingController();
  final TextEditingController timeController = TextEditingController();

  void _submitSchedule() {
    // ignore: unused_local_variable
    final subject = subjectController.text;
    // ignore: unused_local_variable
    final topic = topicController.text;
    // ignore: unused_local_variable
    final date = dateController.text;
    // ignore: unused_local_variable
    final time = timeController.text;

    // Lógica para enviar dados para o backend
      //DESENVOLVER AQUI A PARTE DE ENVIAR DADOS PARA O BACKAND
    // Limpar os campos após submissão
    subjectController.clear();
    topicController.clear();
    dateController.clear();
    timeController.clear();
  }

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(16.0),
      child: Column(
        children: [
          TextField(
            controller: subjectController,
            decoration: const InputDecoration(labelText: 'Subject'),
          ),
          TextField(
            controller: topicController,
            decoration: const InputDecoration(labelText: 'Topic'),
          ),
          TextField(
            controller: dateController,
            decoration: const InputDecoration(labelText: 'Date'),
          ),
          TextField(
            controller: timeController,
            decoration: const InputDecoration(labelText: 'Time'),
          ),
          const SizedBox(height: 20),
          ElevatedButton(
            onPressed: _submitSchedule,
            child: const Text('Add Schedule'),
          ),
        ],
      ),
    );
  }
}
