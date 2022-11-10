import React from "react";
import { StyledRegisterVideo } from "./styles";

export default function RegisterVideo() {
    // [x] falta adicionar o floating button
    // [x] escurecer o fundo quando abre o register video (modal)
    // -> [x]  precisamos controlar o state
    // -> formulário do register video

    const [formVisivel, setFormVisivel] = React.useState(false);

    return (
        <StyledRegisterVideo>
            <button className="add-video" onClick={() => setFormVisivel(true)}>
                +
            </button>
            {formVisivel
                ? (
                    <form>
                        <div>
                            <button className="close-modal" onClick={() => setFormVisivel(false)}>
                                X
                            </button>
                            <input placeholder="Título do vídeo" />
                            <input placeholder="URL" />
                            <button type="submit">
                                Cadastrar
                            </button>
                        </div>
                    </form>
                )
                : false}
        </StyledRegisterVideo>
    )
}