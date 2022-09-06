export const mongoDBErrorHandler = (error: unknown) => {
    const body: Record<string, unknown> = { error: true, ...error as object };
    const status: number = body.errors ? 400 : 500;
    return { status, body };
};