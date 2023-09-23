import { useState } from 'react'
import { StyleSheet, Button, TextInput, View, Modal, Image } from 'react-native'

export default function GoalInput({ onAddGoal, visible, onCancel }) {
  const [inputText, setInputText] = useState('')

  const goalInputHandler = (text) => {
    setInputText(text)
  }

  const addGoalHandler = () => {
    onAddGoal(inputText)
    setInputText('')
  }

  console.log('GoalInput')

  return (
    <Modal visible={visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <Image
          source={require('../assets/images/goal.png')}
          style={styles.image}
        />
        <TextInput
          style={styles.textInput}
          placeholder='Your course goal'
          value={inputText}
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='Add Goal' onPress={addGoalHandler} color='#2063d7' />
          </View>
          <View style={styles.button}>
            <Button title='Cancel' onPress={onCancel} color='#f31282' />
          </View>
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
    backgroundColor: '#eea927',
    padding: 16,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    width: '100%',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    borderWidth: 1,
    borderColor: '#e4d0ff',
    borderRadius: 6,
    padding: 12,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
})
