import './App.css';
import PropTypes from "prop-types";
import {useEffect, useState} from "react";
import { Input, Container, Button, Box, Flex, Text } from "@chakra-ui/react";

export default function App(props, state) {

    const [name, setName] = useState([props.name]);
    const [input, setInput] = useState();

    useEffect(() => {
        localStorage.setItem("name", JSON.stringify(name));;
    }, []);

    function NameChange(event) {
        const {target: {value}} = event;
        setInput(value)
    }

    function saveName(event) {
        let newName = JSON.parse(localStorage.getItem("name"));
        newName.push(input);
        localStorage.setItem("name", JSON.stringify(newName));
        setName(newName)
    }

    return (
        <Container>
            <Box w="100%" p={4}>{name.map(el => <Text key={el}>{el}</Text>)}</Box>
            <Flex>
                <Input onChange={NameChange} placeholder={"Input Name"}/>
                <Button marginLeft={2} onClick={saveName} colorScheme={"blue"}>Save</Button>
            </Flex>
        </Container>
    );
}

App.propTypes = {
    name: PropTypes.string
};
