import { StyleSheet, View, Text, Pressable } from 'react-native'

export default function GoalItem({ text, onDeleteItem, id }) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={() => onDeleteItem(id)}
        android_ripple={{ color: '#210655' }}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  goalItem: {
    backgroundColor: '#5e0acc',
    color: 'white',
    margin: 8,
    borderRadius: 6,
  },
  goalText: {
    color: 'white',
    padding: 8,
  },
  pressedItem: {
    opacity: 0.6,
  },
})
