import { useState } from 'react'
import { StyleSheet, Button, TextInput, View, Modal } from 'react-native'

export default function GoalInput({ onAddGoal, visible }) {
  const [inputText, setInputText] = useState('')

  const goalInputHandler = (text) => {
    setInputText(text)
  }

  const addGoalHandler = () => {
    onAddGoal(inputText)
    setInputText('')
  }

  return (
    <Modal visible={visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder='Your course goal'
          value={inputText}
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonContainer}>
          <Button title='Add Goal' onPress={addGoalHandler} />
          <Button title='Cancel' />
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },

  textInput: {
    width: '70%',
    borderWidth: 1,
    borderColor: '#cccccc',
    marginRight: 8,
    padding: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
})
