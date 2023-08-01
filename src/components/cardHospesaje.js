import * as React from "react";
import { StyleSheet } from "react-native";
import { Avatar, Button, Card, Text } from "react-native-paper";
// import {AiOutlineStar} from 'react-icons/ai';

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const CardHospesaje = () => (
  <Card style={styles.card}>
    <Card.Content>
      {/* <AiOutlineStar/> */}
      <Text variant="titleLarge">Departamento en centro turistico</Text>
      <Text variant="bodyMedium">Cuenta con dos baños,living luminoso y una cochera</Text>
      <Text variant="titleSmall">Av Siempre Viva 1234</Text>
    </Card.Content>
    <Card.Cover source={{ uri: "https://picsum.photos/700" }} style={{width:370,alignSelf:'center'}}/>
    <Card.Content>
      <Text variant="titleSmall">Costo por noche: $2550.44</Text>
      <Text variant="titleSmall">Costo total: $10.000.00</Text>
    </Card.Content>
    <Card.Actions>
      <Button
        style={styles.btn_search_home}
        icon="magnify"
        mode="outlined"
        onPress={() => console.log("Pressed")}
      >Ver el detalle</Button>
    </Card.Actions>
  </Card>
);

export default CardHospesaje;

const styles = StyleSheet.create({
  card: {
    margin: 10,
    maxWidth:500,
    minWidth:373,
  },
});
