import { SaveIcon } from "lucide-react";
import { Container } from "../../components/Container";
import { CountDown } from "../../components/CountDown";
import { DefaultButton } from "../../components/DefaultButton";
import { DefaultInput } from "../../components/DefaultInput";
import { Heading } from "../../components/Heading";
import { MainForm } from "../../components/MainForm";
import type { TaskStateModel } from "../../models/TaskStateModel";
import { MainTemplate } from "../../templates/MainTemplate";

export function Settings() {

    return (
        <MainTemplate>
            <Container>
                <Heading>Configurações</Heading>
            </Container>

            <Container>
                <form action='' className="form">
                    <div className="formRow">
                        <DefaultInput id="workTime" labelText="Foco" />
                    </div>
                    <div className="formRow">
                        <DefaultInput id="shortBreakTime" labelText="Descanso curto" />
                    </div>
                    <div className="formRow">
                        <DefaultInput id="longBreakTime" labelText="Descanso longo" />
                    </div>
                    <div className="formRow">
                        <DefaultButton icon={<SaveIcon />} aria-label="Salvar configurações" title="Salvar configurações" />
                    </div>
                </form>
            </Container>
        </MainTemplate>
    )
}