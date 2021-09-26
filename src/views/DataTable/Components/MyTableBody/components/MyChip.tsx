import React, { useState } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Icon } from '@material-ui/core'
import Chip from '@material-ui/core/Chip'
import { useEffect } from 'react'

type ChipProps = {
  icon: string
  label: string
  color: string
}

function createChip(icon: string, label: string, color: string): ChipProps {
  return { icon, label, color }
}

const doneChip = createChip('done', 'Completado', '#4caf50')

const cancelChip = createChip('cancel', 'No empezado', '#d32f2f')

const warningChip = createChip('cached', 'Incompleto', '#ff9800')

interface MyChipProps {
  progress: number
}

const MyChip: React.FC<MyChipProps> = ({ progress }) => {
  const iconSize = 24
  const [chipType, setChipType] = useState<ChipProps>(warningChip)

  useEffect(() => {
    let chip = warningChip
    if (progress === 100) chip = doneChip
    if (progress === 0) chip = cancelChip
    setChipType(chip)
  }, [])

  return (
    <div style={{ minWidth: '100%' }}>
      <Chip
        variant="outlined"
        style={{ padding: 3, color: chipType.color, borderColor: chipType.color }}
        label={chipType.label}
        size="small"
        icon={<Icon style={{ color: chipType.color, width: iconSize, height: iconSize }}>{chipType.icon}</Icon>}
      />
    </div>
  )
}

export default MyChip
