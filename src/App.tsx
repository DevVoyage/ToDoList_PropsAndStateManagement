import React from 'react';
import { useState } from 'react';
import {
  View,
  Text,
} from 'react-native';
import ToDoList from './ToDoList';

const App = () => {
    const [tasks, setTasks] = useState([
        'Do laundry',
        'Go to gym',
        'Walk dog'
    ]);

    return (
        <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 24, marginBottom: 20 }}>My ToDo List</Text>
            <ToDoList tasks={tasks} />
        </View>
    );
};

export default App;
