import { Application } from "express";
import userRoute from "./User/User.route";

import hardBookRoute from "./HardBook/HardBook.route";
import issueBooksRoute from "./IssueBook/IssueBook.route";
import returnBooksRoute from "./ReturnBook/ReturnBook.route";
import bookPenaltyRoute from "./BookPenalty/BookPenalty.route";


import softBookRoute from "./SoftBook/SoftBook.route";
import boardRoute from "./Board/Board.route";
import bookCategory from "./BookCategory/BookCategory.route";
import bookCondition from "./BookCondition/BookCondition.route";
import bookSubCategory from "./BookSubCategory/BookSubCategory.route";
import bookType from "./BookType/BookType.route";
import box from "./Box/Box.route";
import designation from "./Designation/Designation.route";
import district from "./District/District.route";
import domicileType from "./DomicileType/DomicileType.route";
import gender from "./Gender/Gender.route";
import group from "./Group/Group.route";
import subGroup from "./SubGroup/SubGroup.route";
import language from "./Language/Language.route";
import maritalStatus from "./MaritalStatus/MaritalStatus.route";
import portion from "./Portion/Portion.route";
import postingPlace from "./PostingPlace/PostingPlace.route";
import province from "./Province/Province.route";
import qualification from "./Qualification/Qualification.route";
import region from "./Region/Region.route";
import religion from "./Religion/Religion.route";
import scale from "./Scale/Scale.route";
import schoolType from "./SchoolType/SchoolType.route";
import section from "./Section/Section.route";
import shelf from "./Shelf/Shelf.route";
import subdivision from "./Subdivision/Subdivision.route";
import subject from "./Subject/Subject.route";
import teachingStatus from "./TeachingStatus/TeachingStatus.route";
import college from "./College/College.route";

export function setup(app: Application) {
  app.use("/api/v1/users", userRoute);


  app.use("/api/v1/books/hard", hardBookRoute);
  app.use("/api/v1/issues", issueBooksRoute);
  app.use("/api/v1/returns", returnBooksRoute);
  app.use("/api/v1/penalties", bookPenaltyRoute);


  app.use("/api/v1/books/soft", softBookRoute);
  app.use("/api/v1/boards", boardRoute);
  app.use("/api/v1/book-categories", bookCategory);
  app.use("/api/v1/book-conditions", bookCondition);
  app.use("/api/v1/book-sub-categories", bookSubCategory);
  app.use("/api/v1/book-types", bookType);
  app.use("/api/v1/boxes", box);
  app.use("/api/v1/designations", designation);
  app.use("/api/v1/districts", district);
  app.use("/api/v1/domicile-types", domicileType);
  app.use("/api/v1/genders", gender);
  app.use("/api/v1/groups", group);
  app.use("/api/v1/sub-groups", subGroup);
  app.use("/api/v1/languages", language);
  app.use("/api/v1/marital-statuses", maritalStatus);
  app.use("/api/v1/portions", portion);
  app.use("/api/v1/posting-places", postingPlace);
  app.use("/api/v1/provinces", province);
  app.use("/api/v1/qualifications", qualification);
  app.use("/api/v1/regions", region);
  app.use("/api/v1/religions", religion);
  app.use("/api/v1/scales", scale);
  app.use("/api/v1/school-types", schoolType);
  app.use("/api/v1/sections", section);
  app.use("/api/v1/shelves", shelf);
  app.use("/api/v1/subdivisions", subdivision);
  app.use("/api/v1/subjects", subject);
  app.use("/api/v1/teaching-statuses", teachingStatus);
  app.use("/api/v1/colleges", college);
}
