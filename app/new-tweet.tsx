import { Link, useRouter } from "expo-router";
import { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  Pressable,
} from "react-native";

const user = {
  id: "u1",
  username: "VadimNotJustDev",
  name: "Vadim",
  image:
    "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.png",
};

export default function NewTweet() {
  const [text, setText] = useState("");
  const router = useRouter();
  const onTweetPress = () => {
    console.warn("Posting the tweet:", text);
    setText("");
    router.back();
  };
  return (
    <View style={styles.container}>
      <View style={styles.buttonConatiner}>
        <Link href="../" style={{ fontSize: 18 }}>
          Cancel
        </Link>
        <Pressable onPress={onTweetPress} style={styles.button}>
          <Text style={styles.buttonText}>Tweet</Text>
        </Pressable>
      </View>
      <View style={styles.inputContainer}>
        <Image src={user.image} style={styles.image} />
        <TextInput
          value={text}
          onChangeText={setText}
          placeholder="What's Happening?"
          multiline
          numberOfLines={5}
          style={{ flex: 1 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "white",
    flex: 1,
    paddingTop: 40,
  },
  buttonConatiner: {
    flexDirection: "row",
    marginVertical: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#1C9BF0",
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
  },
  image: {
    width: 50,
    aspectRatio: 1,
    borderRadius: 50,
    marginRight: 10,
  },
});
