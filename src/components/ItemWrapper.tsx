import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {Feather} from '@expo/vector-icons';
import { Task } from './TaskList';

interface ItemWrapperProps {
  item: Task;
  toggleTaskDone: (id: number) => void;
  removeTask: (id: number) => void;
}

export function ItemWrapper({ item, toggleTaskDone, removeTask }: ItemWrapperProps) {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                activeOpacity={0.7}
                style={styles.taskButton}
                onPress={() => toggleTaskDone(item.id)}
            >
                <View 
                    style={item.done ? styles.taskMarkerDone : styles.taskMarker}
                >
                {item.done && (
                    <Feather 
                        name="check"
                        size={14}
                        color="#FFF"
                    />
                )}
                </View>

                <Text 
                    style={item.done ? styles.taskTextDone : styles.taskText}
                >
                    {item.title}
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={{ paddingHorizontal: 20 }}
                onPress={()=> removeTask(item.id)}
                
            >
                <Feather name='trash-2' size={20} color='#808080'/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        backgroundColor: '#262626',
        borderRadius: 8,
        marginBottom: 5
    },
    taskButton: {
        flex: 1,
        paddingLeft: 20,
        paddingVertical: 12,
        marginBottom: 4,
        borderRadius: 4,
        flexDirection: 'row',
        alignItems: 'center'
    },
    taskMarker: {
        height: 24,
        width: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#4EA8DE',
        marginRight: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    taskText: {
        color: '#F2F2F2',
    },
    taskMarkerDone: {
        height: 24,
        width: 24,
        borderRadius: 12,
        backgroundColor: '#5E60CE',
        marginRight: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    taskTextDone: {
        color: '#808080',
        textDecorationLine: 'line-through',
    }
})