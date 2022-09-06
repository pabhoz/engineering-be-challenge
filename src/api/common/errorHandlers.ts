export const mongoDBErrorHandler = (error: unknown) => {
  const body: Record<string, unknown> = { error: true, ...(error as object) };
  const status: number = body.errors ? 400 : 500;
  return { status, body };
};

export const badRequestError = (message: string) => {
  const body = { error: true, message };
  return { status: 400, body };
};

export const forbiddenError = (message: string = undefined) => {
  const body = { error: true, message: message || "You don't have permissions to perform this action" };
  return { status: 401, body };
};
