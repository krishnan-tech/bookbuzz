import { CheckAuth } from "../utils/checkAuth";
import { API } from "./api_url";

export const login_api = async (body: { email: string; password: string }) => {
  const res = await fetch(`${API}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return res.json();
};

export const register_api = async (body: {
  username: string;
  email: string;
  password: string;
}) => {
  const res = await fetch(`${API}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return res.json();
};

export const profile_api = async (body: { token: string; userId: string }) => {
  const res = await fetch(`${API}/profile/${body.userId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${body.token}`,
    },
  });
  return res.json();
};

export const get_all_books = async () => {
  const res = await fetch(`${API}/getAllBooks`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });

  return res.json();
};

export const set_book_page_api = async (body: {
  pages: number;
  bookId: string;
}) => {
  console.log(body.pages, body.bookId);
  const token = localStorage.getItem("token");
  const res = await fetch(`${API}/setReadPages`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return res.json();
};

export const get_single_book = async (bookId) => {
  const res = await fetch(`${API}/book/${bookId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });
  return res.json();
};

export const post_review_api = async (body: {
  bookId: any;
  review: string;
  star: any;
}) => {
  const token = localStorage.getItem("token");
  console.log("body", body);
  const res = await fetch(`${API}/setReview`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return res.json();
};

export const get_review_api = async (body: { bookId: any }) => {
  const token = localStorage.getItem("token");
  const res = await fetch(`${API}/getReview/${body.bookId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      // Authorization: `Bearer ${token}`,
    },
  });
  return res.json();
};

export const get_book_details_api = async (body: { bookId: string }) => {
  const res = await fetch(`${API}/book/${body.bookId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return res.json();
};

export const add_to_current_reading_api = async (body: {
  addToCurrentReading: any;
}) => {
  const token = localStorage.getItem("token");
  const res = await fetch(`${API}/addToCurrentReading`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return res.json();
};

export const set_note_api = async (body: { bookId: any; note: string }) => {
  const token = localStorage.getItem("token");
  const res = await fetch(`${API}/setNote`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return res.json();
};

export const get_note_api = async () => {
  const token = localStorage.getItem("token");
  const res = await fetch(`${API}/getNote`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return res.json();
};

export const get_read_pages = async ({ user_id, book_id }) => {
  const res = await fetch(`${API}/getReadPages/${user_id}/${book_id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });
  return res.json();
};
