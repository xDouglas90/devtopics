import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    max-width: 70rem;
    padding: 0 1rem;
    margin: 2rem auto;

    @media (min-width: 992px) {
        display: grid;
        grid-template-columns: 256px 1fr;
        align-items: flex-start;
    }
`;