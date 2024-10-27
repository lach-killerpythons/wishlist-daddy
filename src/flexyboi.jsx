import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";

import Listbuild from './listbuild';
//<Listbuild/>

export default function Flexy() {
    return (
        <Row gutter={20}>
            <Col style={{backgroundColor:"teal"}} span={4}><Listbuild tier="1"/></Col>
            <Col style={{backgroundColor:"turquoise"}} span={4}><Listbuild tier="2"/></Col>
            <Col style={{backgroundColor:"aquamarine"}} span={4}><Listbuild tier="3"/></Col>

        </Row>
    )
}