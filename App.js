import { useState } from 'react'
import { StyleSheet, View, FlatList, Button } from 'react-native'

import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {
  const [goals, setGoals] = useState([])
  const [isModalVisible, setIsModalVisible] = useState(false)

  const startAddGoalHandler = () => {
    setIsModalVisible(true)
  }

  const addGoalHandler = (inputText) => {
    setGoals((currentGoals) => [
      ...currentGoals,
      { text: inputText, id: Math.random().toString() },
    ])
  }

  const deleteGoalHandler = (id) => {
    setGoals((currentGoals) => currentGoals.filter((goal) => goal.id !== id))
  }

  return (
    <View style={styles.appContainer}>
      <Button
        title='Add New Goal'
        color='#5e0acc'
        onPress={startAddGoalHandler}
      />
      <GoalInput onAddGoal={addGoalHandler} visible={isModalVisible} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={(itemData) => (
            <GoalItem
              text={itemData.item.text}
              onDeleteItem={deleteGoalHandler}
              id={itemData.item.id}
            />
          )}
          keyExtractor={(item, index) => item.id}
          alwaysBounceVertical={false}
          automaticallyAdjustKeyboardInsets={true}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
})
