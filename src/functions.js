import axios from "axios";
import { log, pass, requestUrl } from "./constans";

export function coloredFirstWord(str) {
   const array = str.split(' ');
   const popped = array.pop();
   return {
      string: array.join(' '),
      word: popped,
   }
}

export function dateFormatting(date) {
   const shortDate = date.slice(0, 10)
   const today = new Date(shortDate);
   const dd = today.getDate();
   const mm = today.getMonth() + 1;
   const getZero = el => el < 10 ? '0' + el : el;
   return {
      day: getZero(dd),
      month: getZero(mm)
   }
}

export function linkCropping(str) {
   const modif = str.replace(/^https:\/\/www\.|^http:\/\/www\.|^www\.|^https:\/\/|^http:\/\//, '')
   const firstIndex = modif.indexOf('/');
   const source = modif.slice(0, firstIndex)
   return source;
}

export const getTokenKey = async () => {
   if (localStorage.getItem('token')) {
      return localStorage.getItem('token');
   } else {
      try {
         const response = await axios({
            method: 'post',
            url: requestUrl + '/wp-json/jwt-auth/v1/token',
            data: {
               username: log,
               password: pass,
            },
            headers: {
               'Content-Type': 'application/json',
            }
         })
         const key = await response.data;
         localStorage.setItem('token', key.token);
         return key.token;
      } catch (error) {
         console.error(error.message)
      }
   }
}