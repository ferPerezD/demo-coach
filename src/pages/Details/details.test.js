import React from 'react';
import { render, screen } from '@testing-library/react';
import Details from './index';
import axios from "axios";

jest.mock("axios");

const dataMocked = 
    [
        {
            title: "Couple in Bed", 
            image_id: "6884e725-f7ae-cb1c-853a-201fc4fe5630",
            exhibition_history: "lalalala",
            artist_title: "Philip Guston",
        },
    ];

    const dataMocked2 = 
    [
        {
            title: "Couple in Bed", 
            image_id: "6884e725-f7ae-cb1c-853a-201fc4fe5630",
            exhibition_history: "lalalala",
            artist_title: null,
        },
    ]; 


describe('Details Page should be render as expected', () => {
    test("Details component should be rendered", () => {
        render(<Details />)
    })
    test("Title Should be rendered", () => {
        render(<Details />)
        const title = screen.getByTestId("title-detail")
        expect(title).toBeInTheDocument()
    })
    test("Author should be rendered as Unknown", async () => {
        await axios.get.mockResolvedValue({data:{data: dataMocked2}})
        render(<Details />)
        const title = screen.getByText("Author: Unkonwn")
        expect(title).toBeInTheDocument()
    })
    test("image should be rendered", async () => {
        await axios.get.mockResolvedValue({data:{data: dataMocked}})
        render(<Details />)
        const image = screen.getByRole("img")
        expect(image).toBeInTheDocument()
    })
    test("Author name should be rendered", async () => {
        await axios.get.mockResolvedValue({data:{data: dataMocked}})
        render(<Details />)
        setTimeout(() => {
            const title = screen.getByText("Author: Philip Guston")
            expect(title).toBeInTheDocument()
        }, 500)
    })
})
dataMocked2