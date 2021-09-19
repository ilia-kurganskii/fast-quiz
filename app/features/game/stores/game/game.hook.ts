import {gameStoreSingleton} from "@features/game/stores/game/game.store"

export function useGameStore() {
  return gameStoreSingleton
}
