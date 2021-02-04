import React, { useState } from "react";
import styles from "./FooterPanel.module.css";

import { Col, Container, Row } from "react-bootstrap";

function FooterPanel() {
    const initialLeftText = "";
    const initialRightText = "I'm also a Software Engineer ¯\\_(ツ)_/¯";

    const [leftText, setLeftText] = useState(initialLeftText);
    const [rightText, setRightText] = useState(initialRightText);
    const [hover, setHover] = useState(0);

    const handleMouseEnter = () => {
        setLeftText(initialRightText);
        setRightText(initialLeftText)
        setHover(hover + 1)
    }
    
    const handleMouseLeave = () => {
        setLeftText(initialLeftText);
        setRightText(initialRightText)

        if (hover === 5) {
            window.location.href = "https://github.com/dan-wong/";
        }
    }

    return (
        <footer className={styles.parent}>
            <Container fluid>
                <Row>
                    <Col><p>{leftText}</p></Col>
                    <Col 
                        className={styles.rightAlign}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <p>{rightText}</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default FooterPanel;
