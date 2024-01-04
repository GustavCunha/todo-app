import React from 'react';
import { FlatList } from 'react-native';

import { ItemWrapper } from './ItemWrapper';

export interface Task {
  id: number;
  title: string;
  done: boolean;
}

interface TasksListProps {
  tasks: Task[];
  toggleTaskDone: (id: number) => void;
  removeTask: (id: number) => void;
}

export function TasksList({ tasks, toggleTaskDone, removeTask }: TasksListProps) {
    return (
        <FlatList
            data={tasks}
            keyExtractor={item => String(item.id)}
            contentContainerStyle={{ paddingBottom: 24, paddingHorizontal: 24 }}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
                return (
                    <ItemWrapper item={item} toggleTaskDone={toggleTaskDone} removeTask={removeTask} /> 
                )
            }}
            style={{
                marginTop: 32
            }}
        />
    )
}