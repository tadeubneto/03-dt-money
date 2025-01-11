import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "@phosphor-icons/react";
import { SummaryCard, SummaryContainer } from "./style";
import { useSummary } from "../../hooks/useSummary";
import { PriceFormatter } from "../../utils/formatter";

export function Summary(){
 
    const summary = useSummary()
    
    return (
        <SummaryContainer >
            <SummaryCard>
                <header>
                    <span>Entradas</span>
                    <ArrowCircleUp size={32} />                
                </header>
                    <strong>{PriceFormatter.format(summary.income)}</strong>
            </SummaryCard>
            <SummaryCard>
                <header>
                    <span>Saídas</span>
                    <ArrowCircleDown size={32} />                
                </header>
                    <strong>{PriceFormatter.format(summary.outcome)}</strong>
            </SummaryCard>
            <SummaryCard variant="green">
                <header>
                    <span>Total</span>
                    <CurrencyDollar size={32} />                
                </header>
                    <strong>{PriceFormatter.format(summary.total)}</strong>
            </SummaryCard>        
        </SummaryContainer>

    )
}