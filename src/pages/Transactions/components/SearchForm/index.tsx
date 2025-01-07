import { MagnifyingGlass } from "@phosphor-icons/react";
import { SearchFormContainer } from "./style";

export function SearchForm() {
    return (
        <SearchFormContainer>
            <input
            type="text"
            placeholder="Busque uma transação"/>
            <button>
                <MagnifyingGlass size={20} />
                Buscar
            </button>

          
        </SearchFormContainer>
    )
}