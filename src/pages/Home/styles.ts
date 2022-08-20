import styled from "styled-components";

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;

    max-width: 70rem;
    padding: 5.5rem 1rem 0;
    margin: 2rem auto;

    @media (min-width: 992px) {
        grid-template-columns: 256px 1fr;
        align-items: flex-start;
    }
`;

export const PostsSection = styled.section``;