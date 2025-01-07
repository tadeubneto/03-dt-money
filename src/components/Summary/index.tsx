import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "@phosphor-icons/react";
import { SummaryCard, SummaryContainer } from "./style";

export function Summary(){
    return (
        <SummaryContainer >
            <SummaryCard>
                <header>
                    <span>Entradas</span>
                    <ArrowCircleUp size={32} />                
                </header>
                    <strong>R$ 1.000,00</strong>
            </SummaryCard>
            <SummaryCard>
                <header>
                    <span>Saídas</span>
                    <ArrowCircleDown size={32} />                
                </header>
                    <strong>R$ 1.000,00</strong>
            </SummaryCard>
            <SummaryCard variant="green">
                <header>
                    <span>Total</span>
                    <CurrencyDollar size={32} />                
                </header>
                    <strong>R$ 1.000,00</strong>
            </SummaryCard>        
        </SummaryContainer>

    )
}