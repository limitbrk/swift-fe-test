import { Button, Col, Row } from "antd";
import "./style.scss"
import React from "react";
import { withTranslation } from "react-i18next";
import { TFunction } from "i18next";

class Test1 extends React.Component<{t: TFunction},{shapes:string[][],addition_pos:number}> {
    constructor(props: any) {
        super(props);

        this.state = {
            shapes: [
                ["trapezoid",
                "parallelogram",
                "rectangle",],
                ["oval",
                "square",
                "circle",],
            ],
            addition_pos: 0
        }
    }

    private handleClick = (value: string) => {
        let shapes = this.state.shapes
        switch(value.toLowerCase()){
            case "left":
                shapes[1].push(shapes[0].shift()||"");
                shapes[0].push(shapes[1].shift()||"");
                break;
            case "right":
                shapes[1].unshift(shapes[0].pop()||"");
                shapes[0].unshift(shapes[1].pop()||"");
                break;
            case "down":
                shapes = [
                    shapes[1],shapes[0]
                ]
                this.setState({addition_pos: this.state.addition_pos === 0 ? 1 : 0});
                break;
            case "random":
                this.shuffle(shapes);
                break;
        }
        this.setState({shapes});
    }

    // https://www.101computing.net/shuffling-a-2d-array/
    private shuffle = (arrays: string[][]) => {
        for (var i = 0; i < arrays.length; i++) {
            for (var j = 0; j < arrays[i].length; j++) {
                const k = Math.floor(Math.random() * arrays.length)
                const l = Math.floor(Math.random() * arrays[i].length)
                const tmp = arrays[i][j]
                arrays[i][j] = arrays[k][l]
                arrays[k][l] = tmp
            }
        }
        return arrays
    }

    render() {
        const { t } = this.props; 
        return (
            <div className="test-1">
                <Row justify="center">
                    <Col span={4}>
                        <Button className="float-label" onClick={()=>this.handleClick('left')}>
                            <div className="left-triangle shape"></div>
                            {t('test1_move_left')}
                        </Button>
                    </Col>
                    <Col span={6}>
                        <Button className="float-label" onClick={()=>this.handleClick('down')}>
                            <div className="shape inline">
                                <div className="up-triangle"></div>
                                <div className="down-triangle"></div>
                            </div>
                            {t('test1_move_pos')}
                        </Button>
                    </Col>
                    <Col span={4}>
                        <Button className="float-label" onClick={()=>this.handleClick('right')}>
                            <div className="right-triangle shape"></div>
                            {t('test1_move_right')}
                        </Button>
                    </Col>
                </Row>
                <hr/>   
                <>
                    {this.state.shapes.map((items,i) =>{
                        const row : any = []

                        if ( this.state.addition_pos === i ){
                            row.push(
                                <Col span={6}>
                                </Col>
                            )
                        }

                        items.forEach((item) => {
                            row.push(
                                <Col span={6}>
                                    <Button key={item} className="fix-res" onClick={()=>this.handleClick('random')}>
                                        <div className={item}></div>
                                    </Button>
                                </Col>
                            )
                        });

                        return (
                            <Row justify="center">
                                {row}
                            </Row>
                        );
                    })}
                </>
            </div>
        );
    }
};
 
export default withTranslation()(Test1);