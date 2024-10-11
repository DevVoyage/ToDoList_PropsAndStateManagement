import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

const ToDoList = ({ tasks }) => {
    return (
        <View>
            {tasks.map((task, index) => (
                <Text key={index} style={styles.task}>
                    {task}
                </Text>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    task: {
        fontSize: 18,
        marginVertical: 5,
        color: '#000',
    },
});

export default ToDoList;
