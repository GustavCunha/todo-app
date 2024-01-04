import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import {Feather} from '@expo/vector-icons';

interface TodoInputProps {
    addTask: (task: string) => void;
}

export function TodoInput({ addTask }: TodoInputProps) {
    const [task, setTask] = useState('');

    function handleAddNewTask() {
        if(!task) return;

        addTask(task);
        setTask('');
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput 
                style={styles.input} 
                placeholder="Adicione uma nova tarefa"
                placeholderTextColor="#808080"
                returnKeyType="send"
                value={task}
                onChangeText={setTask}
                onSubmitEditing={handleAddNewTask}
                selectionColor='#F2F2F2'
            />
            <TouchableOpacity
                testID="add-new-task-button"
                activeOpacity={0.7}
                style={styles.addButton}
                onPress={handleAddNewTask}
            >
                <Feather name="plus-circle" size={18} color="#F2F2F2" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        borderRadius: 5,
        marginTop: -28,
        marginHorizontal: 24,
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        flex: 1,
        height: 54,
        padding: 16,
        backgroundColor: '#262626',
        borderRadius: 6,
        borderColor: '#0D0D0D',
        borderWidth: 1,
        color: '#F2F2F2',
        fontSize: 16,
        marginRight: 2
    },
    addButton: {
        backgroundColor: '#1E6F9F',
        height: 52,
        width: 52,
        paddingHorizontal: 12,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        marginLeft: 2
    },
});