import { View, Text, TextInput, Modal, Pressable, Button, StyleSheet } from 'react-native';
import { IconSymbol } from '@/components/ui/IconSymbol';

const ReportModal = ({ visible, setVisible }: {
  visible: boolean,
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  return (
    <Modal
      animationType='slide'
      transparent={true}
      visible={visible}
      onRequestClose={() => setVisible(false)}
      style={styles.modal}
    >
      <View style={styles.modal}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Report Form</Text>
          <Pressable
            onPress={() => setVisible(false)}
            style={{
              position: 'absolute',
              right: 0
            }}
          >
            <IconSymbol 
              name="close.fill"
              color="#f0f0f0"
              size={32}
            />
          </Pressable>
        </View>
        <View style={styles.formContainer}>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    padding: 12,
    borderRadius: 24,
    height: '75%',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#333',
    alignItems: 'center'
  },
  headerContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center'
  },
  header: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  formContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'start',
    alignItems: 'center',
  },
  mutedText: {
    color: 'gray',
    width: '100%',
    textAlign: 'left'
  },
  categoryList: {
    width: '100%',
    backgroundColor: '#222',
    flex: 1,
    flexDirection: 'row',
    padding: 8,
    borderRadius: 12
  }
})

export default ReportModal;
