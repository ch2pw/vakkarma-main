import { ok } from "neverthrow";

import type { ReadPostedAt } from "./ReadPostedAt";
import type { ReadThreadId } from "./ReadThreadId";
import type { ReadThreadTitle } from "./ReadThreadTitle";
import type { Result } from "neverthrow";

export type ReadThread = {
  readonly _type: "ReadThread";
  readonly id: ReadThreadId;
  readonly title: ReadThreadTitle;
  readonly postedAt: ReadPostedAt;
  readonly updatedAt: ReadPostedAt;
  // ここはスレッドのレス数なので妥協
  readonly countResponse: number;
};

export const createReadThread = ({
  id,
  title,
  postedAt,
  updatedAt,
  countResponse,
}: {
  id: ReadThreadId;
  title: ReadThreadTitle;
  postedAt: ReadPostedAt;
  updatedAt: ReadPostedAt;
  countResponse: number;
}): Result<ReadThread, Error> => {
  return ok({
    _type: "ReadThread",
    id,
    title,
    postedAt,
    updatedAt,
    countResponse,
  });
};
