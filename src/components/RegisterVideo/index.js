import React from "react";
import { StyledRegisterVideo } from "./styles";

function useForm(propsDoForm) {
    const [values, setValues] = React.useState(propsDoForm.initialValues);
    return {
        values,
        handleChange: (evento) => {
            const value = evento.target.value;
            const name = evento.target.name
            console.log(evento.target.name);
            setValues({
                ...values,
                titulo: value,
            });
        }
    };
}

export default function RegisterVideo() {
    // [x] falta adicionar o floating button
    // [x] escurecer o fundo quando abre o register video (modal)
    // -> [x]  precisamos controlar o state
    // -> formulário do register video
    // --->(o que precisa para o formulário funcionar?)
    // ------> pegar os dados, vindos do state. (titulo e url)
    // ------> onSubmit()
    // ------> limpar o form

    const formCadastro = useForm({
        initialValues: { titulo: "Smile", url: "https://youtube.." }
    });
    const [formVisivel, setFormVisivel] = React.useState(false);


    return (
        <StyledRegisterVideo>
            <button className="add-video" onClick={() => setFormVisivel(true)}>
                +
            </button>
            {formVisivel
                ? (
                    <form onSubmit={(evento) => {
                        evento.preventDefault();
                    }}>
                        <div>
                            <button className="close-modal" onClick={() => setFormVisivel(false)}>
                                X
                            </button>
                            <input placeholder="Título do vídeo"
                                name={"titulo"}
                                value={formCadastro.values.titulo}
                                onChange={formCadastro.handleChange} />
                            <input placeholder="URL"
                                value={formCadastro.values.url}
                                onChange={formCadastro.handleChange}
                                name={"url"} />
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