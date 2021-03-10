import './App.css';
import { Box, Heading, Container, Text } from "@chakra-ui/react";
import {useEffect, useState} from "react";

export default function Quote() {

    const [quote, setQuote] = useState({author: '', quote:  ''});

    useEffect(() => {
        fetch('http://api.quotable.io/random')
            .then(resp => resp.json())
            .then(jsonObj => setQuote({
                author:jsonObj.author,
                quote:jsonObj.content,
            }));
    }, []);

    return (
        <Container>
            <Box>
                <Heading>
                    {quote.quote}
                </Heading>
                <Text>
                    {quote.author}
                </Text>
            </Box>
        </Container>
    );
}
