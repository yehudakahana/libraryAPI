var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
export const addBookFromApi = (bookName) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios.get(`https://freetestapi.com/api/v1/books?search=${bookName}`);
    const book = {
        title: bookName,
        author: response.data[0].author,
        id: uuidv4()
    };
    return book;
});
