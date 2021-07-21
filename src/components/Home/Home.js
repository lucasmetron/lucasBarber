import React from 'react';
import './Home.css'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { makeStyles } from '@material-ui/core';
import imgFundo from '../../assets/indexBlack.jpg'
import wave from '../../assets/homeWave.png'


let useStyles = makeStyles({
    arrow: {
        fontSize: 50,
        color: "#FFFFFF",
    }
})

export default function Home(props) {

    const classes = useStyles();

    return (
        <div className="containerHome">

            <div className="imgFundo">
                <img src={imgFundo} alt="imagem de fundo" />
            </div>


            <div className="contentHome">
                <div className="textAlignHome">
                    <p >Este projeto apresenta os dias e horários em uma barbearia,
                        para que o cliente possa fazer o agendamento com antecedência e
                        chegar no salão com hora marcada e com isso trazer agilidade no atendimento.
                    </p>
                </div>

                <div className="buttonHome">
                    <button>Acesso do cliente</button>
                    <ArrowForwardIosIcon className={classes.arrow} />
                </div>

                <img src={wave} alt="teste" />

            </div>
        </div>
    );
}