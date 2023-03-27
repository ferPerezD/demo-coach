import React from 'react';
import { render, screen, act, cleanup } from '@testing-library/react';
import Home from './index';
import axios from "axios";

jest.mock("axios");

const dataMocked = {
    data: {
        data: [
            {image_id: "b006ced9-6ef8-4b36-2d41-60fd1fae2377", id: 77573}

        ]
    }
}
const dataMockedWithTwoElements = {
    data: {
        data: [
            {image_id: "b006ced9-6ef8-4b36-2d41-60fd1fae2377", id: 77573},
            {image_id: "b006ced9-6ef8-4b36-2d41-60fd1fae2375", id: 77574}

        ]
    }
}
const dataMockedToFail = {
    data: {
        data: [
            {image_id: null, id: 77573}
        ]
    }
}

 
describe('Home Page should be render as expected', () => {
    it('Home page should be rendered', async () => {
        await act(() => render(<Home />))
    })
    it('Should render the title', async () => {
        await act(() => render(<Home />))
        const title = screen.getByText('Art Institute of Chicago')
        expect(title).toBeInTheDocument()
    })
    it('images should be rendered', async () => {
        await axios.get.mockResolvedValue(dataMocked)
        const { getAllByRole } = await act(() => render(<Home />))
        const image = getAllByRole("images");
        expect(image.src).toContain("https://www.artic.edu/iiif/2/b006ced9-6ef8-4b36-2d41-60fd1fae2377/full/843,/0/default.jpg?w=248&fit=crop&auto=format")
        
    })
    it('images should not be rendered', async () => {
        await axios.get.mockResolvedValue(dataMockedToFail)
        const { getAllByRole } = await act(() => render(<Home />))
            const image = getAllByRole("images");
            expect(image).toBeNull();
            const text = getAllByRole("no-image-text");
            expect(text).toBeInTheDocument();
    })
    it('images list should not be rendered', async () => {
        await axios.get.mockResolvedValue(dataMockedWithTwoElements)
        const { getAllByRole } = await act(() => render(<Home />))
        setTimeout(() => {
            const imageList = getAllByRole("image-list");
            const image = getAllByRole("images");
            expect(imageList.children).toHaveLength(2);
            expect(image.length).toBe(dataMockedWithTwoElements.data.data.length);
            image.forEach((img, i) => {
                expect(img).toHaveAttribute(
                    'src', `https://www.artic.edu/iiif/2/${dataMockedWithTwoElements.data.data[i]}/full/843,/0/default.jpg?w=248&fit=crop&auto=format`
                )
            })
        }, 500)
    })
})