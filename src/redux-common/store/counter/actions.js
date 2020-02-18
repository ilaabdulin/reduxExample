import { DECREMENT, RESET, FIXED_DATA } from "./types";

/**
 * Синхронный вызов
 */
export const decrement = () => ({
  type: DECREMENT
});

export const reset = () => ({
  type: RESET
});

export const fixedData = () => ({
  type: FIXED_DATA
});

/**
 * Асинхронный вызов
 * */

const wait = () => new Promise(res => setTimeout(res, 1000));

export const increment = data => async (dispatch, getState, someParams) => {
  dispatch({ type: "INCREMENT_START" });
  try {
    await wait();
    dispatch({ type: "INCREMENT_SUCCESS", payload: data });
  } catch {
    dispatch({ type: "INCREMENT_ERROR", payload: data });
  }
};

/**
 * getState - ф-я из обьекта store, вернет текущий стор
 * dispatch - ф-я из обьекта store, принимает обьект,
 *      обазательный параметр которого type,
 *      запустит reducer, вызовет метод оповещения (subcribe) подписчиков
 *      тригернет ВСЕХ активных.
 * someParams - ваши параметры, будут в каждом екшене
 * increment - action creator
 * обьект, который вернет => action, содержит тип,
 *      относительно которого будет реагировать ф-я reducer
 */
