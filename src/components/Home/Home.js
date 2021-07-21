import React from 'react';
import './Home.css'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { makeStyles } from '@material-ui/core';


let useStyles = makeStyles({
    arrow: {
        width: 100,
        color: "#FFFFFF",
    }
})

export default function Home(props) {

    const classes = useStyles();

    return (
        <div className="containerHome">
            <div className="contentHome">
                <div className="textAlignHome">
                    <p >Este projeto apresenta os dias e horários em uma barbearia,
                        para que o cliente possa fazer o agendamento com antecedência e
                        chegar no salão com hora marcada e com isso trazer agilidade no atendimento.
                    </p>
                </div>

                <div className="buttonHome">
                    <button>Acesse</button>
                    <ArrowForwardIosIcon className={classes.arrow} />
                </div>

            </div>
        </div>
    );
}