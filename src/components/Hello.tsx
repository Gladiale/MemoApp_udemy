import { View, Text, StyleSheet, type TextStyle } from "react-native";

interface Props {
  children: string;
  bang?: boolean;
  style?: TextStyle;
}

const Hello = (props: Props) => {
  const { children, bang, style } = props;

  return (
    <View>
      {/* 後のstyleが優先、上書きされます */}
      <Text style={[styles.text, style]}>
        Hello {children}
        {bang ? "!" : null}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#fff",
    backgroundColor: "blue",
    fontSize: 40,
    fontWeight: "bold",
    padding: 16,
  },
});

export default Hello;
