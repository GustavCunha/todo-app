import { useState } from "react";
import { StyleSheet, View } from "react-native";

import { Header } from "../components/Header";
import { TodoInput } from "../components/TodoInput";
import { Task, TasksList } from "../components/TaskList";
import { Filter } from "../components/Filter";

export function Home() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [tasksDone, setTasksDone] = useState(0);
    
    function handleAddTask(newTaskTitle: string) {
        const newTask = {
          id: new Date().getTime(),
          title: newTaskTitle,
          done: false
        }
    
        setTasks([...tasks, newTask]);
    }
    
    function handleToggleTaskDone(id: number) {
        const updatedTasks = tasks.map(item => ({...item}));

        const findItem = updatedTasks.find(item => item.id === id);

        if(!findItem) {
            return;
        }

        findItem.done = !findItem.done;
        setTasks(updatedTasks);

        const completedTasksCount = updatedTasks.filter(item => item.done).length;
        setTasksDone(completedTasksCount);
    }
    
    function handleRemoveTask(id: number) {
        const updatedTask = tasks.filter(item => item.id !== id);

        setTasks(updatedTask);
    }

    return (
        <View style={styles.container}>
            <Header />

            <TodoInput addTask={handleAddTask} />

            <View style={styles.filter}>
                <Filter title="Criadas" type='Created' qtd={tasks.length}/>

                <Filter title="Concluídas" type='Done' qtd={tasksDone}/>
            </View>

            <TasksList 
                tasks={tasks} 
                toggleTaskDone={handleToggleTaskDone}
                removeTask={handleRemoveTask} 
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1A1A1A',
    },
    filter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 32,
        marginHorizontal: 24
    }
})